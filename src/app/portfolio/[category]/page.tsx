import React from 'react';
import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { Item, Items, items } from './data.ts';
import { notFound } from 'next/navigation';

const getData = (cat: keyof Items): Item[] | undefined => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

interface CategoryProps {
  params: {
    category: string;
  };
}

const Category = ({ params }: CategoryProps) => {
  const data = getData(params.category as keyof Items);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data?.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text='See More' url='#' />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt='' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
