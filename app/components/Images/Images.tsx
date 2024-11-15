"use client"

import styles from "./Images.module.css";
import React, { useState } from 'react';
import Image from 'next/image';
import forwardArrow from "../../../public/icons/arrow-forward.svg";
import backArrow from "../../../public/icons/arrow-back.svg";
import Icon from "../Icon/Icon.tsx";

const Images = ({ files }) => {

	const [index, setIndex] = useState(0); 
	const file = files[index];

	const leftButtonPressed = () => {
		if(index-1 >= 0)
			setIndex((index-1)%files.length);
	}

	const rightButtonPressed = () => {
		setIndex((index+1)%files.length);
	}

	const multiImage = files.length > 1;

	return (
		<div className={styles.main}>
			<div className={styles.player}>
				<Image 
					src={file}
					width={800}
					height={400}
					className={styles.img}
				/>
				{
					multiImage && (
						<>
							<div className={styles.playerBackground} />
							<div className={styles.controls}>
								<div className={styles.leftArrow}>
									<Icon image={backArrow} action={leftButtonPressed} />
								</div>
								<div className={styles.rightArrow}>
									<Icon image={forwardArrow} action={rightButtonPressed} />
								</div>
							</div>
						</>
					)
				}
			</div>
		</div>
	);
};
export default Images;
