import React, { useState, KeyboardEvent } from 'react';

interface TagsInputProps {
    tags: string[];
    selectedTags: (tags: string[]) => void;
}

const TagsInput: React.FC<TagsInputProps> = ({ tags: initialTags, selectedTags }) => {
    const [tags, setTags] = useState<string[]>(initialTags);

    const removeTags = (indexToRemove: number) => {
        const newTags = tags.filter((_, index) => index !== indexToRemove);
        setTags(newTags);
        selectedTags(newTags);
    };

    const addTags = (event: KeyboardEvent<HTMLInputElement>) => {
        const input = event.target as HTMLInputElement;
        if (input.value !== "" && event.key === "Enter") {
            const newTags = [...tags, input.value];
            setTags(newTags);
            selectedTags(newTags);
            input.value = "";
        }
    };

    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span
                            className='tag-close-icon'
                            onClick={() => removeTags(index)}
                        >
                            x
                        </span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                onKeyUp={addTags}
                placeholder="Press enter to add tags"
            />
        </div>
    );
};

export default TagsInput;
