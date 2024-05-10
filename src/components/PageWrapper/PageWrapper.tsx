import  { ReactNode } from 'react';




const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div  style={{minHeight:"100%"}}>
      <main>{children}</main>
    </div>
  );
};

export default Page;
