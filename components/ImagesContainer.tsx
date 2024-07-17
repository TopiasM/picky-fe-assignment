"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Carousel, Modal } from "flowbite-react";

interface ImagesContainerProps {
  images: string[];
  size: "sm" | "lg";
}

const sizes = {
  lg: 175,
  sm: 75,
};

export default function ImagesContainer({
  images,
  size,
}: ImagesContainerProps) {
  const res = sizes[size];

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <React.Fragment>
      {images.map((url, i) => (
        <Image
          className="cursor-pointer rounded-lg border-2 border-solid border-gray-100 dark:border-gray-800"
          key={`discussion-img-${i}`}
          src={url}
          width={res}
          height={res}
          alt={`Discussion image thumbnail ${i + 1}`}
          onClick={() => toggleModal()}
        />
      ))}

      <Modal show={showModal} size="4xl" onClose={toggleModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="md:h-192 sm:h-144 h-120 w-auto">
            <Carousel slide={false}>
              {images.map((url, i) => (
                <Image
                  className="rounded-lg"
                  key={`discussion-img-${i}`}
                  src={url}
                  width={1000}
                  height={1000}
                  alt={`Discussion Image ${i + 1}`}
                  onClick={() => toggleModal()}
                />
              ))}
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
