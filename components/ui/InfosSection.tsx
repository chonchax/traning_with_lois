type InfosProps = {
    label: string;
    value: string;
    };

export default function InfosSection({label, value} : InfosProps) {
  return (
    <div className="flex flex-row gap-x-4 items-center">
    <p className="text-primary-200">{label}</p>
    <p className="text-primary-50">{value}</p>
  </div>
);
}
