import Head from "next/head";
import ContactForm from "../components/contact-form/contact-form";
import { Fragment } from "react";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me feedback about blogs-manu" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
export default ContactPage;
