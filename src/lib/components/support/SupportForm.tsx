type SuportFormPropsType = {
  title: string;
  children: React.ReactNode;
  button: React.ReactNode;
};

export default function SupportForm(props: SuportFormPropsType) {
  const { title, children, button } = props;
  return (
    <>
      <p className="font-bold mb-5 px-5 text-sm">{title}</p>
      <div className="p-5 py-5 bg-chart overflow-hidden">{children}</div>

      <div className="px-5 text-secondary">
        <div className="flex flex-row justify-between gap-5 py-5">{button}</div>
      </div>
    </>
  );
}
