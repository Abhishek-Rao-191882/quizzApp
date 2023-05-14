interface Props {
    children: any;
  }
  
  const Container: React.FC<Props> = ({ children }) =>{
    return(
        <div className="flex flex-col justify-center items-center">
      <div className="relative isolate lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-20"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-10">
          {children}
        </div>
      </div>
    </div>
    )
}

export default Container;