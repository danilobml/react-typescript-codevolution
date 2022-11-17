type RandomNumberType = {
    value: number;
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;   
}


type NegativeNumber = RandomNumberType & {
    isPositive?: never;
    isNegative: boolean;
    isZero?: never;   
}


type ZeroNumber = RandomNumberType & {
    isPositive?: never;
    isNegative?: never;
    isZero: boolean;   
}


type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

function RandomNumber({value, isPositive,isNegative,isZero}: RandomNumberProps) {
  return (
    <div>{value} {isPositive ? 'positive' : isNegative ? 'negative': 'zero'}</div>
  )
}

export default RandomNumber