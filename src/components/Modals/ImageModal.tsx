import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
} from '@chakra-ui/react'
import React from 'react';

const ImageModal = ({ children, image, }: any) => {
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
                <ModalOverlay/>
                <ModalContent>
                    <ModalBody>
                        <img src={image} alt="image" />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ImageModal;