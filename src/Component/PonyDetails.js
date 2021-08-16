import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './PonyDetails.css'
import axios from "axios";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import Modal from 'react-modal';
import ReactPlayer from "react-player";

Modal.setAppElement('#root')

function PonyDetails() {
    const [index, setIndex] = useState(2);
    const [ponyData, setPonyData] = useState([])
    const params = useParams();
    console.log(params)

    const [isModalOpen, setIsModalOpen] = useState(false);

    async function getPonyData() {
        try {
            const result = await axios.get(`http://ponyweb.ml/v1/character/${params.id}?limit=1`);
            setPonyData(result.data.data);
            console.log(result.data.data);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getPonyData();
    }, [])

    function prevImage(num) {
        setIndex(checkNumber(num - 1));

    }

    function nextImage(num) {
        setIndex(checkNumber(num + 1));

    }

    function checkNumber(num) {
        if (num < 0) {
            return ponyData[0].image.length - 1;
        }
        if (num > ponyData[0].image.length - 1) {
            return 0;
        }
        return num;/*if none of the situation matches, then just return the num*/
    }

    return (
        <div className='pony-details-container'>
            {ponyData.map((pony) => {
                return (
                    <section className='pony-details-section' key={pony.id}>
                        <div className='pony-wrapper pony-wrapper-left'>
                            <button className='pony-image-btn' onClick={() => prevImage(index)}>
                                <FaChevronLeft/>
                            </button>
                            <img className='pony-details-image' src={pony.image[index]}/>
                            <button className='pony-image-btn' onClick={() => nextImage(index)}>
                                <FaChevronRight/>
                            </button>

                        </div>
                        <div className='pony-wrapper pony-wrapper-right'>
                            <p>name: {pony.name}</p>
                            <p>gender: {pony.sex}</p>
                            <p>occupation: {pony.occupation}</p>
                            <div className='pony-kind-wrapper'>
                                <p>kind:</p>
                                {pony.kind.map((kind) => {
                                    return (
                                        <p className='pony-kind' key={kind.index}>{kind}</p>
                                    )
                                })}
                            </div>
                            {pony.id === 1 &&
                            <>
                                <button className='video-btn' onClick={() => setIsModalOpen(true)}>see video</button>
                                <Modal isOpen={isModalOpen}
                                       onRequestClose={() => setIsModalOpen(false)}
                                       shouldCloseOnOverlayClick={true}
                                       style={
                                           {
                                               overlay: {
                                                   backgroundColor: 'grey',
                                                   position: 'absolute',
                                                   top: '15vh',
                                                   left: 0
                                               },
                                               content: {
                                                   color: '#000',
                                                   backgroundColor: 'lightPink',
                                                   display: 'flex',
                                                   flexDirection: 'column',
                                                   justifyContent:'space-evenly',
                                                   alignItems:'center'
                                               }

                                           }
                                       }
                                >
                                    <ReactPlayer className='pony-video-section' width='70%' height='55vh' controls
                                                 url='https://www.youtube.com/watch?v=AHROhpTXssY'/>
                                    <button className='video-btn' onClick={() => setIsModalOpen(false)}>close</button>
                                </Modal>
                            </>
                            }


                        </div>
                    </section>
                )
            })}
                </div>
                )

            }

export default PonyDetails;