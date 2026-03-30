import { useState } from 'react'
import { inquiries } from '../api'

const SERVICE_TYPES = [
  'Commercial HVAC',
  'Residential AC',
  'Kitchen Equipment',
  'Water Heaters',
  'Other',
]

export default function InquiryForm() {
  const [type, setType] = useState('home')
  const [form, setForm] = useState({
    email: '',
    phone: '',
    service_type: '',
    message: '',
    company_name: '',
    first_name: '',
    last_name: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await inquiries.create({ ...form, type })
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-lg mx-auto text-center py-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Thank you!</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">We've received your inquiry and will be in touch soon.</p>
        <button
          onClick={() => { setSuccess(false); setForm({ email: '', phone: '', service_type: '', message: '', company_name: '', first_name: '', last_name: '' }) }}
          className="px-5 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
        >
          Submit another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-left">
      {/* Type Toggle */}
      <div className="flex mb-6 border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => setType('home')}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${type === 'home' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}
        >
          Homeowner
        </button>
        <button
          type="button"
          onClick={() => setType('company')}
          className={`flex-1 py-2.5 text-sm font-medium transition-colors ${type === 'company' ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400'}`}
        >
          Business
        </button>
      </div>

      {error && <p className="bg-red-100 text-red-700 px-3 py-2.5 rounded-lg text-sm mb-4">{error}</p>}

      {type === 'home' ? (
        <div className="flex gap-4 max-sm:flex-col max-sm:gap-0">
          <label className="block mb-4 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            First name
            <input type="text" value={form.first_name} onChange={update('first_name')} required className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600" />
          </label>
          <label className="block mb-4 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Last name
            <input type="text" value={form.last_name} onChange={update('last_name')} required className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600" />
          </label>
        </div>
      ) : (
        <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          Company name
          <input type="text" value={form.company_name} onChange={update('company_name')} required className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600" />
        </label>
      )}

      <div className="flex gap-4 max-sm:flex-col max-sm:gap-0">
        <label className="block mb-4 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
          <input type="email" value={form.email} onChange={update('email')} required className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600" />
        </label>
        <label className="block mb-4 flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          Phone
          <input type="tel" value={form.phone} onChange={update('phone')} required className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600" />
        </label>
      </div>

      <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
        Service type
        <select value={form.service_type} onChange={update('service_type')} className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-2 focus:outline-blue-600">
          <option value="">Select a service...</option>
          {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>

      <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
        Message
        <textarea value={form.message} onChange={update('message')} required rows={4} placeholder="Tell us about your project or issue..." className="mt-1.5 block w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-y focus:outline-2 focus:outline-blue-600" />
      </label>

      <button type="submit" disabled={submitting} className="w-full py-3 mt-2 text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors">
        {submitting ? 'Sending...' : 'Send inquiry'}
      </button>
    </form>
  )
}
