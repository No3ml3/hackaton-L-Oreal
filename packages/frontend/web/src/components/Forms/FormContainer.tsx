interface Container extends React.HTMLAttributes<HTMLDivElement> {}
export default function FormContainer({ children }: Container) {
  return (
    <div className='text-secondary bg-primary relative flex h-full flex-col px-7 pb-12 pt-5 text-sm shadow-md lg:text-base'>
      {children}
    </div>
  );
}
