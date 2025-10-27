// src/components/TextType.jsx
import React, { useState, useEffect } from 'react';

export default function TextType({ 
    text = ["Default text"], 
    typingSpeed = 75, 
    pauseDuration = 1500,
    showCursor = true,
    cursorCharacter = "|"
}) {
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % text.length;
            const fullText = text[current];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseDuration);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, loopNum, text, typingSpeed, pauseDuration]);

    return (
        <span className="inline-block">
            {currentText}
            {showCursor && <span className="cursor-blink ml-1">{cursorCharacter}</span>}
        </span>
    );
}