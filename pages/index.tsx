import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button/Button';
import { Htag } from '../components/Htag/Htag';
import { Paragraph } from '../components/Paragraph/Paragraph';
import { Rating } from '../components/Rating/Rating';
import { Tag } from '../components/Tag/Tag';

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);

  return (
    <div >
      <Htag tag='h1'>Заголовок</Htag>
      <Button
        appearance='primary'
        arrow='right'
      >
        Кнопка
      </Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Paragraph size='l'>Большой</Paragraph>
      <Paragraph size='s'>Малый</Paragraph>
      <Tag size='m' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag color='ghost'>Ghost</Tag>
      <Tag color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </div>
  );
};
