type InfosProps = {
    label: string;
    value: string;
    };

export default function InfosSection({label, value} : InfosProps) {
  return (
    <div className="flex flex-col items-center">
    <p>{label}</p>
    <p>{value}</p>
  </div>
);
}
