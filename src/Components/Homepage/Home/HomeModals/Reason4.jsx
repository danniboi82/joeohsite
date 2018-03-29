import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import BasicEng from '../../../../Images/basicEnglish.jpg';
import './Modal.css';

const ConsultingModal = (props) => {
    return (
        <div>
            <Modal trigger={<Button color='yellow'> 추가정보 </Button>}>
                <Modal.Header>기본 영어</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={BasicEng} />
                    <Modal.Description>
                        <ul>
                            <li>
                                <h3>초 / 중 / 고 영어</h3>
                            </li>
                            <li>
                                <h3>Essay필기 / 읽기 / 토론 / Speaking</h3>
                            </li>
                            <li>
                                <h3>생활 / 취업 / Business 영어 </h3>
                            </li>
                            <li>
                                <h3>Essay필기 / 읽기 / 토론 / Speaking</h3>
                            </li>
                        </ul>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default ConsultingModal;