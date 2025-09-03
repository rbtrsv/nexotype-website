import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight text-center mb-8">
          <span className="bg-gradient-to-br from-[#c517ff] to-[#2631f7] bg-clip-text text-transparent">
            Buraro
          </span>{' '}
          <span className="text-zinc-900 dark:text-zinc-100">
            Privacy Policy
          </span>
        </h1>
      </header>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          <strong>Effective Date:</strong> January 2, 2025
        </p>
        
        <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black leading-relaxed">
          Buraro is committed to safeguarding the privacy of visitors to our website. This Privacy Policy outlines how we collect, use, share, and protect personal information, in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
        </p>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            1. Information We Collect
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium my-2 text-zinc-900 dark:text-zinc-100">
              1.1 Automatically Collected Data
            </h3>
            <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-4">When you visit our website, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
              <li><strong>Device Information</strong>: IP address, browser type, operating system, device identifiers.</li>
              <li><strong>Usage Data</strong>: Pages viewed, time spent on each page, navigation paths, clickstream data, and referring URL.</li>
              <li><strong>Location Data</strong>: General geographic location inferred from your IP address.</li>
              <li><strong>Cookies and Tracking Technologies</strong>: Cookies, web beacons, and other tracking tools to monitor and analyze site usage and performance.</li>
            </ul>

            <h3 className="text-xl font-medium my-2 text-zinc-900 dark:text-zinc-100">
              1.2 Information Collected from Third Parties
            </h3>
            <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
              We may also collect information about you from third parties, such as analytics providers like Google Analytics, Google Search Console, and other tools, which help us understand website performance, traffic, and trends.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            2. How We Use Your Information
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-4">We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
            <li><strong>To Provide Services</strong>: Respond to inquiries and manage communications.</li>
            <li><strong>Analytics</strong>: Use services such as Google Analytics and Google Search Console to monitor website performance and user behavior, improving our services and optimizing our content.</li>
            <li><strong>Advertising</strong>: Use cookies and other technologies to display relevant ads on our website and other platforms via ad networks.</li>
            <li><strong>Compliance and Legal Obligations</strong>: Process your data to comply with applicable laws, enforce our terms, and protect our rights or the rights of others.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-4">We use cookies and similar technologies to enhance user experience and track website performance. Cookies enable us to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
            <li><strong>Recognize you on subsequent visits</strong>: Personalize content and remember your preferences.</li>
            <li><strong>Track website traffic and performance</strong>: Using tools like Google Analytics to collect and analyze data.</li>
            <li><strong>Serve Ads</strong>: Partner with third-party ad networks to display ads based on your browsing behavior.</li>
          </ul>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            You can control cookie preferences through your browser settings. Please note that disabling cookies may affect certain website features.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            4. Third-Party Tools and Services
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-4">We use third-party services to help us operate our business, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
            <li><strong>Google Analytics</strong>: Tracks and reports website traffic. For more information on how Google uses data, visit Google's Privacy Policy.</li>
            <li><strong>Google Search Console</strong>: Tools used to analyze our website's performance in search engines and overall technical health.</li>
            <li><strong>Ad Networks</strong>: We work with third-party advertising partners who may use cookies and other technologies to serve ads that appear on our site.</li>
            <li><strong>Affiliate Networks</strong>: We may participate in affiliate programs that track referrals and purchases through cookies and tracking technologies.</li>
          </ul>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            These third parties may collect personal data subject to their own privacy policies. We recommend reviewing the privacy policies of these third parties.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            5. Data Sharing and Disclosure
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-4">We may share your personal information with:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
            <li><strong>Service Providers</strong>: Third parties who assist us in providing our services (e.g., analytics tools, hosting services, affiliate networks).</li>
            <li><strong>Legal Obligations</strong>: When required by law, regulation, or court order, or in response to a valid legal process.</li>
            <li><strong>Business Transfers</strong>: In the event of a merger, sale, or acquisition, your personal information may be transferred to the acquiring entity.</li>
          </ul>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            We do not sell or rent your personal information to third parties for their marketing purposes.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            6. Your Rights and Choices
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium my-2 text-zinc-900 dark:text-zinc-100">
              6.1 Access and Control Over Your Data
            </h3>
            <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
              <li><strong>Right to Access</strong>: You may request access to the personal data we hold about you.</li>
              <li><strong>Right to Rectification</strong>: You can request correction of inaccurate or incomplete information.</li>
              <li><strong>Right to Deletion</strong>: You can request the deletion of your data, subject to legal obligations.</li>
              <li><strong>Right to Restrict Processing</strong>: You can request limitations on how your data is processed.</li>
              <li><strong>Right to Object</strong>: You can object to data processing based on legitimate interests, including for direct marketing purposes.</li>
              <li><strong>Right to Data Portability</strong>: You can request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
              To exercise these rights, please contact us at contact@buraro.com. We may require verification of your identity before processing your request.
            </p>

            <h3 className="text-xl font-medium my-2 text-zinc-900 dark:text-zinc-100">
              6.2 Cookies and Tracking Technologies
            </h3>
            <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
              You can control cookies through your browser settings. Some browsers also allow users to block tracking technologies.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            7. Data Retention
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. When we no longer need your information, we will securely delete or anonymize it.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            8. Data Security
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-4">We take reasonable measures to protect the confidentiality, integrity, and security of your personal information. These measures include:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 font-normal max-sm:text-sm sm:text-base dark:text-white text-black">
            <li><strong>Encryption</strong>: Protecting data transmitted over the internet.</li>
            <li><strong>Access Controls</strong>: Limiting access to personal data to authorized personnel.</li>
            <li><strong>Monitoring</strong>: Regularly monitoring systems for potential vulnerabilities.</li>
          </ul>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            Despite these measures, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            9. International Data Transfers
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            Your personal data may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from those in your country. We take appropriate steps to ensure that your personal information is protected in accordance with this Privacy Policy wherever it is processed.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            10. Children's Privacy
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected such information, we will delete it as soon as possible.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold my-3 text-zinc-900 dark:text-zinc-100">
            11. Changes to This Privacy Policy
          </h2>
          <p className="font-normal max-sm:text-sm sm:text-base dark:text-white text-black mb-6">
            We may update this Privacy Policy from time to time. When we make changes, we will revise the effective date at the top of the policy and post the updated policy on our website. We encourage you to review this policy regularly.
          </p>
        </div>

      </div>
    </article>
  );
};

export default PrivacyPolicy;