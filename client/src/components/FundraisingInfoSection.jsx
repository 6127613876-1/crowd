import React from 'react';

const FundraisingInfoSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-16 px-4 md:px-8 bg-gradient-to-br from-blue-100 to-blue-200">
            <div className="max-w-2xl text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Fundraising on GoFundMe is easy, powerful, and trusted.
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Get what you need to help your fundraiser succeed on GoFundMe, whether you’re raising money for yourself, friends, family, or charity. With no fee to start, GoFundMe is the world’s leading <a href="#" className="text-blue-600 underline">crowdfunding platform</a>—from <a href="#" className="text-blue-600 underline">memorial tributes</a> and funerals to <a href="#" className="text-blue-600 underline">medical emergencies</a> and <a href="#" className="text-blue-600 underline">nonprofits</a>. Whenever you need help, you can ask here.
                </p>
                <p className="text-gray-700">
                    Still have <a href="#" className="text-blue-600 underline">questions</a>? Learn more about <a href="#" className="text-blue-600 underline">how GoFundMe works</a>.
                </p>
            </div>
        </div>
    );
};

export default FundraisingInfoSection;
