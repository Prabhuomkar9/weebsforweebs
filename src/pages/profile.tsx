import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const ProfilePage: NextPage = () => {
  const { data: session } = useSession();

  return (
    <section className='p-10 -mt-20 rounded-2xl bg-gradient-to-r  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <MDBContainer className="text-center text-white">
        <MDBRow className="justify-content-center">
          <MDBCol md="8" lg="6">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBCardTitle className="text-3xl font-bold mb-4">Ramesh</MDBCardTitle>
                <MDBCardText className="mb-4">Full Stack Developer</MDBCardText>
                <div className="flex justify-center mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-full w-32 h-32 object-cover border-4 border-white"
                  />
                </div>
                <div className="text-left mb-4">
                  <div className="mb-2">
                    <span className="font-bold">Email:</span> ramesh@gmail.com
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Phone:</span> +91 123456789
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Mobile:</span> +91 123456789
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Address:</span> Bay Area, San Francisco, CA
                  </div>
                </div>
                <div className="button w-full flex justify-evenly">
                  <MDBBtn color="light" className="text-white rounded-xl p-5 border hover:bg-white hover:text-purple-500">Edit Profile</MDBBtn>
                  {session && session.user && session.user.email && session.user.email === "nnm22is002@nmamit.in" &&
                    <MDBBtn color="light" className="text-white rounded-xl p-5 border hover:bg-white hover:text-purple-500">Dashboard</MDBBtn>
                  }
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >
  );
}

export default ProfilePage
