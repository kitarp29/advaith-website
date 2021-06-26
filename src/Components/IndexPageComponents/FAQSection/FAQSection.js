const FAQSection = () => {
  return (
    <div>
      <section className="text-gray-300">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center mb-4">
              Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about the event and what can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  How much does it cost?
                </summary>
                <span className="text-sm">
                  It's open to all College Students. This means you do not have to think twice before registering.
                  {/* Ek dhella nhi lgega BC */}
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  Will there be prizes ?
                </summary>

                <span className="text-sm">
                  {/* BSDK Bina Prizes ke kroge tumlog participate */}
                  Sure, there are many priizes for winners as well as participants. Each participant will be awarded a certificate of participation.
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  How can I migrate to another site?
                </summary>

                <span className="text-sm">
                  
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  Can I change the domain you give me?
                </summary>

                <span className="text-sm">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span className="text-sm">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span className="text-sm">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { FAQSection };
