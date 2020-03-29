import React from "react";
import MailChimp from "react-mailchimp-form";

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <a href="https://www.twitter.com/_juanmnl">&copy;{year} - juanmnl</a>{" "}
      <a href="https://github.com/alejandrogalaviz/">
        &copy;{year} - alejandrogalaviz
      </a>
      <br />
      <a href="https://github.com/alejandrogalaviz/covid19-monitor-sonora">
        ¿Me ayudas?
      </a>
      {/* <MailChimp
        action="https://monitorsonora.us19.list-manage.com/subscribe/post?u=531590cbcdb7f2d72e48cb5e0&amp;id=cd4dba1d73"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true
          }
        ]}
      /> */}
    </footer>
  );
}
