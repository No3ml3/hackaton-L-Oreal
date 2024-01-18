/* eslint-disable unicorn/no-null */
import { useState } from 'react';
import React from 'react';

import FormContainer from './FormContainer';

export default function FormUpload() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = async () => {
    const formDataToSend = new FormData();
    if (uploadedImage) {
      formDataToSend.append('picture', uploadedImage);
    }

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/upload`, {
        method: 'POST',
        body: formDataToSend,
      });
    } catch (error) {
      console.error(`Erreur de requête`, error);
    }
    setIsFormSubmitted(true);
    setUploadedImage(null);
  };

  return (
    <form
      className='my-auto flex flex-col items-center justify-center gap-4'
      encType='multipart/form-data'
      onSubmit={async (event) => {
        event.preventDefault();
        await onSubmit();
      }}
    >
      <label
        htmlFor='picture'
        className='mx-auto mb-2 block w-1/2 text-sm font-medium text-gray-900'
      >
        {'Envoyer une image'}
      </label>
      <input
        type='file'
        id='picture'
        name='picture'
        onChange={(event) => {
          setUploadedImage(event.target.files?.[0] || null);
        }}
        className='mx-auto block w-1/2 cursor-pointer rounded-lg border border-gray-300 bg-gray-300 text-sm text-gray-900 focus:outline-none'
      />
      <button
        type='submit'
        disabled={!uploadedImage}
        className='mx-auto mt-4 w-1/5 rounded-lg border p-4 hover:bg-gray-100'
      >
        {`Envoyer`}
        {isFormSubmitted ? (
          <div className='mt-4 text-center text-green-500'>
            {'Fichier envoyé avec succès'}
          </div>
        ) : null}
      </button>
    </form>
  );
}
