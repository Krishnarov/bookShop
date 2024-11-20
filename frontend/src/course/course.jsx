import React from 'react'
import Courses from '../componetes/courses';
import Navebar from '../componetes/navebar';
import Footer from '../componetes/footer';

function Course() {
  return (
    <>
    <Navebar />
    <div className="min-h-screen">
    <Courses />

    </div>
    <Footer />
    </>
  )
}

export default Course;
