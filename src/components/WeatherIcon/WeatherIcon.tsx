import Image from 'next/image'

export default function WeatherIcon({ icon, width = 24, height = 24, alt = '' }: { icon: string, width: number, height: number, alt: string }) {

  return (<Image
    src={`/icons/${icon}.svg`}
    width={width} height={height}
    alt={alt}
  />);
}
