"use client";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import PdfReader from "./pdfReader";
import { Download } from "@/public/svg/download";
import DownloadPdfButton from "./donwloadPdfButton";

interface Props {
    url: string;
    title: string;
    layer: string;
    bigScreen: boolean;
}

const ModalPdf: React.FC<Props> = ({ url, title, layer, bigScreen, }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>

            <Button  size={bigScreen ? "lg" : "sm"} radius="full" onClick={onOpen} className={`${layer} `}>
                {title} <Download/> {" "}
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" scrollBehavior="inside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <DownloadPdfButton/>
                            </ModalHeader>
                            <ModalBody>
                                <PdfReader url={url}/>

                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="primary"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};
export default ModalPdf;