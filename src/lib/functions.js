import {OrdinalNum} from "./constants";

export const distributeNum = (value, name, rangeSliders, setRangeSliders) => {
    const remainderHalf = (100 - value) / 2;
    const remainderSmall = remainderHalf - 0.5;
    const remainderBig = remainderHalf + 0.5;

    const otherSliderkeys = checkNonMainSlider(name);

    if (value % 2 === 0) {
        setRangeSliders({
            [name]: value,
            [otherSliderkeys[0]]: remainderHalf,
            [otherSliderkeys[1]]: remainderHalf,
        });

    } else if (value % 2 === 1) {
        setRangeSliders({
            [name]: value,
            [otherSliderkeys[0]]: remainderSmall,
            [otherSliderkeys[1]]: remainderBig,
        });
    }
};

const checkNonMainSlider = (name) => {
    var other1, other2 = "";

    if (name === OrdinalNum.first) {
        other1 = OrdinalNum.second;
        other2 = OrdinalNum.third;
    } else if (name === OrdinalNum.second) {
        other1 = OrdinalNum.first;
        other2 = OrdinalNum.third;
    } else if (name === OrdinalNum.third) {
        other1 = OrdinalNum.first;
        other2 = OrdinalNum.second;
    }

    return [other1, other2];
};