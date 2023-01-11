"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalError = void 0;
var react_1 = require("@chakra-ui/react");
var fa_1 = require("react-icons/fa");
var ModalError = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, message = _a.message;
    return (<react_1.Modal isOpen={isOpen} onClose={onClose}>
    <react_1.ModalOverlay />
    <react_1.ModalContent color="gray.700">
      <react_1.ModalHeader display="flex">
        Erro
        <react_1.Center background="red.400" borderRadius="3px" marginLeft="2px" width="20px" height="30px">
          <fa_1.FaExclamation color={react_1.theme.colors.white}/>
        </react_1.Center>
      </react_1.ModalHeader>
      <react_1.ModalCloseButton />
      <react_1.ModalBody>{message}</react_1.ModalBody>

      <react_1.ModalFooter>
        <react_1.Button height="50px" background="red.400" color="white" width="100%" _hover={{ background: 'red.450' }} onClick={onClose}>
          Tentar outra vez
        </react_1.Button>
      </react_1.ModalFooter>
    </react_1.ModalContent>
  </react_1.Modal>);
};
exports.ModalError = ModalError;
//# sourceMappingURL=ModalError.js.map