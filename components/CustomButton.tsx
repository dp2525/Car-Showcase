"use client";

import Image from 'next/image';

const CustomButton = () => {
  return (
    <button
    disabled-={false}
    type={"button"}
    className={'custom-btn'}
    onClick={() => {}}
    >

        <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>

  )
}

export default CustomButton