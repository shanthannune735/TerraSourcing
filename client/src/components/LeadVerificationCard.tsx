const LeadVerificationCard = ({ number, title, description }: { number: string, title: string, description: string}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl
        ${number === '01' ? 'bg-blue-400' :
          number === '02' ? 'bg-orange-400' :
          number === '03' ? 'bg-green-400' : 'bg-yellow-400'}`}>
        {number}
      </div>
      <h2 className="ml-4 text-xl font-bold">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LeadVerificationGrid = () => (
  <div className="container mx-auto p-8 max-w-[1024px]">
    <h1 className="text-3xl font-bold mb-8 text-center">Verify Your Leads from Trusted Platforms</h1>
    <p className="mb-8 text-center text-gray-600">
      In today's competitive export market, the quality of your leads can make or break your success. With Terra Sourcing's lead verification services, you can be confident that every lead is genuine, relevant, and ready for engagement.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <LeadVerificationCard
        number="01"
        title="Basic Verification"
        description="We begin by validating the basic contact information of your leads, including their email addresses, phone numbers, and website presence."
      />
      <LeadVerificationCard
        number="02"
        title="Advanced Verification"
        description="We take verification a step further by cross-referencing data from embassies, the registrar of companies, and other government databases."
      />
      <LeadVerificationCard
        number="03"
        title="Direct Validation"
        description="At this stage, we validate the lead by directly connecting with the importer, confirming their interest, capabilities, and requirements."
      />
      <LeadVerificationCard
        number="04"
        title="Comprehensive Assurance"
        description="The final level involves checking the lead against Export Credit Guarantee Corporation (ECGC) guidelines for added security and compliance."
      />
    </div>
  </div>
);

export default LeadVerificationGrid;
