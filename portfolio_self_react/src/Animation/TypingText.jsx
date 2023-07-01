import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

export default function TypingText({completionWord, speed, fontSize, color}) {

    const [text, setText] = useState(''); // n초마다 이전 텍스트 + 현재 텍스트
    const [count, setCount] = useState(0); // 글자수 카운트

    useEffect(() => {
        const typingInterval = setInterval(()=>{
            setCount(count + 1);
            setText((prevText)=> {
                let result = prevText ? prevText + completionWord[count] : completionWord[0];
                setCount(count+1);

                if(count >= completionWord.length) {
                    setCount(0);
                    setText('');
                }

                return result;
            });
        }, speed);
        return () => {
            clearInterval(typingInterval);
        }
    })
    return (
        <Container>
            <p style={{fontSize:`${fontSize}`, color:`${color}`, "letter-spacing": "3px"}} >{ text }</p>
        </Container>
    );
}

const Container = styled.div`
    width:100%;
    height: 2rem;   
`;

