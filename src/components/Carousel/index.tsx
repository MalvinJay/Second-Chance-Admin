'use client';

import React from "react";
import AliceCarousel, { Props } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = Props &
  Partial<{
    className: string;
    items: React.ReactElement[];
    centerMode: boolean;
    magnifiedIndex?: number;
    activeSlideCSS?: string;
  }>;

const Slider = React.forwardRef<AliceCarousel, SliderComponentProps>(
  (
    {
      className,
      items = [],
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      activeIndex = 0,
      ...props
    },
    ref,
  ) => {
    const isSmall = (index) => {
      if (activeIndex + magnifiedIndex >= items?.length) {
        return index !== activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items.map((child, index) => {
        if (isSmall(index)) {
          return React.cloneElement(child, {
            ...child.props,
            className: [child.props?.className, activeSlideCSS]
              .filter(Boolean)
              .join(" "),
          });
        }
        return React.cloneElement(child);
      })
      : items;

    return (
      <div className={className}>
        <AliceCarousel
          ref={ref}
          items={slideItems}
          disableDotsControls
          touchTracking
          disableButtonsControls
          infinite
          mouseTracking
          {...props}
        />
      </div>
    );
  },
);

Slider.displayName = "Slider";

export { Slider };
