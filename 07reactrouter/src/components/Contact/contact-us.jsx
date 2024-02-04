import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Hi, how can we help?{" "}
        </p>
      </div>
      <form
        action="mailto:recipient-email@example.com"
        method="post"
        enctype="text/plain"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  style={{ width: "90px", WebkitAppearance: "none" }}
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
                >
                  <option value="AF">PAK</option>
                  <option value="AL">AF</option>
                  <option value="DZ">DZ</option>
                  <option value="AD">AD</option>
                  <option value="AO">AO</option>
                  <option value="AG">AG</option>
                  <option value="AR">AR</option>
                  <option value="AM">AM</option>
                  <option value="AU">AU</option>
                  <option value="AT">AT</option>
                  <option value="AZ">AZ</option>
                  <option value="BS">BS</option>
                  <option value="BH">BH</option>
                  <option value="BD">BD</option>
                  <option value="BB">BB</option>
                  <option value="BY">BY</option>
                  <option value="BE">BE</option>
                  <option value="BZ">BZ</option>
                  <option value="BJ">BJ</option>
                  <option value="BT">BT</option>
                  <option value="BO">BO</option>
                  <option value="BA">BA</option>
                  <option value="BW">BW</option>
                  <option value="BR">BR</option>
                  <option value="BN">BN</option>
                  <option value="BG">BG</option>
                  <option value="BF">BF</option>
                  <option value="BI">BI</option>
                  <option value="KH">KH</option>
                  <option value="CM">CM</option>
                  <option value="CA">CA</option>
                  <option value="CV">CV</option>
                  <option value="CF">CF</option>
                  <option value="TD">TD</option>
                  <option value="CL">CL</option>
                  <option value="CN">CN</option>
                  <option value="CO">CO</option>
                  <option value="KM">KM</option>
                  <option value="CD">CD</option>
                  <option value="CG">CG</option>
                  <option value="CR">CR</option>
                  <option value="CI">CI</option>
                  <option value="HR">HR</option>
                  <option value="CU">CU</option>
                  <option value="CY">CY</option>
                  <option value="CZ">CZ</option>
                  <option value="DK">DK</option>
                  <option value="DJ">DJ</option>
                  <option value="DM">DM</option>
                  <option value="DO">DO</option>
                  <option value="TL">TL</option>
                  <option value="EC">EC</option>
                  <option value="EG">EG</option>
                  <option value="SV">SV</option>
                  <option value="GQ">GQ</option>
                  <option value="ER">ER</option>
                  <option value="EE">EE</option>
                  <option value="ET">ET</option>
                  <option value="FJ">FJ</option>
                  <option value="FI">FI</option>
                  <option value="FR">FR</option>
                  <option value="GA">GA</option>
                  <option value="GM">GM</option>
                  <option value="GE">GE</option>
                  <option value="DE">DE</option>
                  <option value="GH">GH</option>
                  <option value="GR">GR</option>
                  <option value="GD">GD</option>
                  <option value="GT">GT</option>
                  <option value="GN">GN</option>
                  <option value="GW">GW</option>
                  <option value="GY">GY</option>
                  <option value="HT">HT</option>
                  <option value="HN">HN</option>
                  <option value="HU">HU</option>
                  <option value="IS">IS</option>
                  <option value="IN">IN</option>
                  <option value="ID">ID</option>
                  <option value="IR">IR</option>
                  <option value="IQ">IQ</option>
                  <option value="IE">IE</option>
                  <option value="IL">IL</option>
                  <option value="IT">IT</option>
                  <option value="JM">JM</option>
                  <option value="JP">JP</option>
                  <option value="JO">JO</option>
                  <option value="KZ">KZ</option>
                  <option value="KE">KE</option>
                  <option value="KI">KI</option>
                  <option value="KP">KP</option>
                  <option value="KR">KR</option>
                  <option value="KW">KW</option>
                  <option value="KG">KG</option>
                  <option value="LA">LA</option>
                  <option value="LV">LV</option>
                  <option value="LB">LB</option>
                  <option value="LS">LS</option>
                  <option value="LR">LR</option>
                  <option value="LY">LY</option>
                  <option value="LI">LI</option>
                  <option value="LT">LT</option>
                  <option value="LU">LU</option>
                  <option value="MK">MK</option>
                  <option value="MG">MG</option>
                  <option value="MW">MW</option>
                  <option value="MY">MY</option>
                  <option value="MV">MV</option>
                  <option value="ML">ML</option>
                  <option value="MT">MT</option>
                  <option value="MH">MH</option>
                  <option value="MR">MR</option>
                  <option value="MU">MU</option>
                  <option value="MX">MX</option>
                  <option value="FM">FM</option>
                  <option value="MD">MD</option>
                  <option value="MC">MC</option>
                  <option value="MN">MN</option>
                  <option value="ME">ME</option>
                  <option value="MA">MA</option>
                  <option value="MZ">MZ</option>
                  <option value="MM">MM</option>
                  <option value="NA">NA</option>
                  <option value="NR">NR</option>
                  <option value="NP">NP</option>
                  <option value="NL">NL</option>
                  <option value="NZ">NZ</option>
                  <option value="NI">NI</option>
                  <option value="NE">NE</option>
                  <option value="NG">NG</option>
                  <option value="NO">NO</option>
                  <option value="OM">OM</option>
                  <option value="PK">PK</option>
                  <option value="PW">PW</option>
                  <option value="PA">PA</option>
                  <option value="PG">PG</option>
                  <option value="PY">PY</option>
                  <option value="PE">PE</option>
                  <option value="PH">PH</option>
                  <option value="PL">PL</option>
                  <option value="PT">PT</option>
                  <option value="QA">QA</option>
                  <option value="RO">RO</option>
                  <option value="RU">RU</option>
                  <option value="RW">RW</option>
                  <option value="KN">KN</option>
                  <option value="LC">LC</option>
                  <option value="VC">VC</option>
                  <option value="WS">WS</option>
                  <option value="SM">SM</option>
                  <option value="ST">ST</option>
                  <option value="SA">SA</option>
                  <option value="SN">SN</option>
                  <option value="RS">RS</option>
                  <option value="SC">SC</option>
                  <option value="SL">SL</option>
                  <option value="SG">SG</option>
                  <option value="SK">SK</option>
                  <option value="SI">SI</option>
                  <option value="SB">SB</option>
                  <option value="SO">SO</option>
                  <option value="ZA">ZA</option>
                  <option value="SS">SS</option>
                  <option value="ES">ES</option>
                  <option value="LK">LK</option>
                  <option value="SD">SD</option>
                  <option value="SR">SR</option>
                  <option value="SZ">SZ</option>
                  <option value="SE">SE</option>
                  <option value="CH">CH</option>
                  <option value="SY">SY</option>
                  <option value="TW">TW</option>
                  <option value="TJ">TJ</option>
                  <option value="TZ">TZ</option>
                  <option value="TH">TH</option>
                  <option value="TG">TG</option>
                  <option value="TO">TO</option>
                  <option value="TT">TT</option>
                  <option value="TN">TN</option>
                  <option value="TR">TR</option>
                  <option value="TM">TM</option>
                  <option value="TV">TV</option>
                  <option value="UG">UG</option>
                  <option value="UA">UA</option>
                  <option value="AE">AE</option>
                  <option value="GB">GB</option>
                  <option value="US">US</option>
                  <option value="UY">UY</option>
                  <option value="UZ">UZ</option>
                  <option value="VU">VU</option>
                  <option value="VA">VA</option>
                  <option value="VE">VE</option>
                  <option value="VN">VN</option>
                  <option value="YE">YE</option>
                  <option value="ZM">ZM</option>
                  <option value="ZW">ZW</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                required
                type="number"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
