"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalSuccess = void 0;
var react_1 = require("@chakra-ui/react");
var fa_1 = require("react-icons/fa");
//   import Smile from '../../assets/smile.png';
var theme_1 = require("../../styles/theme");
var ModalSuccess = function (_a) {
    var isOpen = _a.isOpen, message = _a.message, buttonMessage = _a.buttonMessage, onClick = _a.onClick, onClose = _a.onClose;
    return (<react_1.Modal isOpen={isOpen} onClose={onClose}>
    <react_1.ModalOverlay />
    <react_1.ModalContent color="gray.700" padding="2">
      <react_1.HStack>
        <react_1.ModalHeader display="flex">
          Sucesso
          <react_1.Center background="green.400" borderRadius="3px" marginLeft="2px" width="20px" height="30px">
            <fa_1.FaExclamation color={theme_1.theme.colors.white}/>
          </react_1.Center>
        </react_1.ModalHeader>
        <react_1.Image 
    // src={Smile}
    alt="Smile" boxSize={['50px']} color={theme_1.theme.colors.green['400']}/>
      </react_1.HStack>
      <react_1.ModalCloseButton />
      <react_1.ModalBody>
        <react_1.Text>{message}</react_1.Text>
      </react_1.ModalBody>

      <react_1.ModalFooter>
        <react_1.Button height="50px" background="green.400" color="white" width="100%" _hover={{ background: 'green.550' }} onClick={onClick}>
          {buttonMessage}
        </react_1.Button>
      </react_1.ModalFooter>
    </react_1.ModalContent>
  </react_1.Modal>);
};
exports.ModalSuccess = ModalSuccess;
//# sourceMappingURL=ModalSuccess.js.map