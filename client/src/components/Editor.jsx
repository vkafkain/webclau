import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export function Editor({ value, onChange }) {
  
    const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
      };

    return (
    <ReactQuill
      theme={'snow'}
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
}
