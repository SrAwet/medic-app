import React from 'react'
import { Navbar } from '../components/Navbar'

const AboutPage = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="bg-gray-100 min-h-screen py-7">
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">About Our Clinic</h1>
          <p className="text-gray-700 mb-6">
            At Our Clinic, we are dedicated to providing compassionate and exceptional medical care to our patients.
            With a team of experienced doctors and state-of-the-art facilities, we aim to ensure your health and well-being.
          </p>
          <h2 className="text-xl font-semibold mb-3">Our Mission and Values</h2>
          <p className="text-gray-700 mb-6">
            Our mission is to deliver high-quality healthcare services with a focus on patient-centered care and advanced medical treatments.
            We believe in integrity, empathy, and continuous improvement as our core values.
          </p>
          <h2 className="text-xl font-semibold mb-3">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Our team consists of dedicated medical professionals who are experts in their respective fields.
            With a diverse range of specialties, we are equipped to address various health concerns and needs.
          </p>
          <h2 className="text-xl font-semibold mb-3">Services We Offer</h2>
          <p className="text-gray-700 mb-6">
            We offer a comprehensive range of medical services, including general check-ups, specialized treatments, diagnostic services,
            and preventive care. Our priority is to provide tailored solutions for your individual health needs.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage