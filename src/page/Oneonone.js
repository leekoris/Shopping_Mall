import React from 'react'
import styled from "styled-components";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

//https://falaner.tistory.com/59?category=898434
export function Oneonone() {

const [Content, setContent] = useState({
   title: '',
   content: ''
})
const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
     const {name, value } = e.target;
     setContent({
       ...Content, 
       [name]: value
     })
     console.log(Content);
  };


    return (  
        <div className="list">  
      <h1>1대 1문의 게시판</h1>
      <div className='Onecontainer'>
       {viewContent.map(element =>
        <div>
        <h2> {element.title}</h2>
        <div>
            {element.content}
            </div>
        </div>
       )}   
        </div>
            <div className='form-wrapper'>
                <input className="title-input"
                 type='text'  
                  placeholder='제목'
               
                  name='title'
                  />
                <CKEditor
                    editor={ClassicEditor}
                    data=" "
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }} 
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({event, editor, data});
                        setContent({
                          ...Content,
                          content: data
                        })
                        console.log(Content);
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}/>
            </div>
            <button className="submit-button"
            onClick={()=> {
              setViewContent(viewContent.concat({...Content}));
            }}>등록 </button>

</div>
    )
}

const Cover = styled.div `
  div {

    .form-wrapper{
  width: 80%;
  margin: 0 auto;
}

.title-input {
  width: 400px;
  height: 20px;
  margin: 20px;
}

.text-area {
  width: 80%;
  min-height: 300px;
}

.submit-button {
  width: 200px;
  height: 50px;
  font-size: 15px;
  padding: 20px;
  border: none;
  background: indianred;
  border-radius: 15px;
}
  }
`;
