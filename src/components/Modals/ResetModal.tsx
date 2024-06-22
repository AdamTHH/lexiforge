import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react';
import XButton from './XButton';
import ConfirmButton from './ConfirmButton';

const ResetModal = ({ onConfirm, theme, children }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (element: any) => {
        return React.cloneElement(element, {
            onClick: onOpen,
        });
    };

    return (
        <>
            {React.Children.map(children, child => handleClick(child))}

            <Modal isOpen={isOpen} onClose={onClose} size={'sm'} isCentered={window.innerWidth >= 1024 ? false : true}>
                <ModalOverlay />
                <ModalContent border={'2px solid rgba(120, 120, 120, 0.3)'} borderRadius={'xl'} bgColor={`${theme === "" ? 'whitesmoke' : 'dark'}`} textColor={`${theme === "" ? 'dark' : 'whitesmoke'}`}>
                    <ModalHeader className='wordtitle' marginInline={'auto'}>Reset?</ModalHeader>
                    <ModalFooter>
                        <XButton onClose={onClose}/>
                        <ConfirmButton onClick={() => {onClose(); onConfirm()}} initialColor="rgba(255, 0, 0, 0.5)" hoverColor="rgba(255, 0, 0, 0.7)"/>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ResetModal;