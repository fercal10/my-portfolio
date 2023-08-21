import React, { useState } from 'react';

import { Space, Tag } from 'antd';

const { CheckableTag } = Tag;

const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
interface Props {
    data: string[]
}

export function Tags({ data = [] }: Props) {
    const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTags, tag]
            : selectedTags.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <>
            <Space className='mt-4' size={[0, 8]} wrap>
                {data.map((tag) => (
                    <CheckableTag
                        key={tag}
                        checked={true}
                        onChange={(checked: boolean) => handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
            </Space>
        </>
    );
};

