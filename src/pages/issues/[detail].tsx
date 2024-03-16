import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const DetailPage: React.FC = () => {
  const router = useRouter();
  const [textInput, setTextInput] = useState<string>('');
  const [appendedText, setAppendedText] = useState<string>('');

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value);
  };

  const handleAppendText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppendedText(prevText => prevText + textInput + '\n'); // Add a new line after each appended text
    setTextInput('');
  };

  return (
    <div className='my-10 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm w-[700px] bg-opacity-10 border border-gray-100 shadow-md rounded-lg p-10 overflow-hidden'>
      <h2 className="text-3xl font-bold mb-4">Issue Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ratione, quia pariatur, explicabo voluptas ex
        odio possimus, quisquam fuga earum aperiam animi optio? Reiciendis dicta reprehenderit accusamus omnis iusto
        nobis possimus quis esse excepturi.
      </p>
      <Image src={"/assets/jpg/rroom1.jpg"} width={300} height={300} alt='Image' />
      <form className="w-full mx-auto" onSubmit={handleAppendText}>
        <div className="mb-4">
          <label htmlFor="description" className="block font-bold mb-1">Add Comment</label>
          <textarea id="description" name="description" value={textInput} onChange={handleTextareaChange} required className="input-field text-black p-2 rounded-md w-full"></textarea>
        </div>
        <button type="submit" className="text-white rounded-xl py-3 px-7 border hover:bg-white hover:text-purple-500">Submit</button>
        <div className="mb-4">
          <label htmlFor="location" className="block font-bold mb-1">Comments</label>
          <div className="comment bg-white text-black p-2 h-48 rounded-md w-full" style={{ whiteSpace: 'pre-line' }}>
            {appendedText}
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailPage;
