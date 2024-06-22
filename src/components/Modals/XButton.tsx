import { Button } from "@chakra-ui/react"
import { FaXmark } from "react-icons/fa6"

const XButton = ({onClose}:any) => {
    return (
        <Button textColor={`inherit`} bg='transparent' border={'2px solid rgba(120, 120, 120, 0.3)'}
            _hover={{ border: "2px solid rgba(120, 120, 120, 0.6)" }}
            marginStart={'auto'} paddingInline={'10'} rounded={'lg'}
            onClick={onClose}>
            <FaXmark />
        </Button>
    )
}

export default XButton;