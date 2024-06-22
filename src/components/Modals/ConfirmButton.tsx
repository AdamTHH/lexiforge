import { Button } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa6"

const ConfirmButton = ({ onClick, hoverColor, initialColor }: any) => {
    return (
        <Button textColor={`inherit`} bg={`${initialColor || "transparent"}`} border={'2px solid rgba(120,120,120,0.3)'}
            _hover={{ bg: hoverColor }}
            marginEnd={'auto'} paddingInline={'10'} rounded={'lg'} marginLeft={'10'}
            onClick={onClick}>
            <FaCheck />
        </Button>
    )
}

export default ConfirmButton;