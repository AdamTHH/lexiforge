import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Input,
} from '@chakra-ui/react'
import React, { useState } from 'react';
import XButton from './XButton';
import ConfirmButton from './ConfirmButton';

const AddNewWordModal = ({ onConfirm, theme, children }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (element: any) => {
        return React.cloneElement(element, {
            onClick: onOpen,
        });
    };

    const [input, setInput] = useState("")

    return (
        <>
            {React.Children.map(children, child => handleClick(child))}

            <Modal isOpen={isOpen} onClose={onClose} size={'sm'} isCentered={window.innerWidth >= 1024 ? false : true}>
                <ModalOverlay />
                <ModalContent border={'2px solid rgba(120, 120, 120, 0.3)'} borderRadius={'xl'} bgColor={`${theme === "" ? 'whitesmoke' : 'dark'}`} textColor={`${theme === "" ? 'dark' : 'whitesmoke'}`}>
                    <ModalHeader className='wordtitle' marginInline={'auto'}>Create word</ModalHeader>
                    <ModalBody>
                        <Input border={'2px solid rgba(120, 120, 120, 0.4)'} _hover={{ border: "2px solid rgba(120, 120, 120, 0.6)" }}
                            onChange={(e) => setInput(e.target.value)}></Input>
                    </ModalBody>
                    <ModalFooter>
                        <XButton onClose={onClose}/>
                        <ConfirmButton onClick={() => {if (input !== "") {onClose(); setInput(""); onConfirm(input)}}} hoverColor="rgba(0, 165, 0, 0.5)"/>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddNewWordModal;