import React from "react";
import MailChimp from "react-mailchimp-form";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <footer>
      <div className="width-80">
        <p className="mailchimp-title">
          Suscríbete al boletín informativo de Monitor Sonora para estar
          enterado de las últimas actualizaciones
        </p>
        <MailChimp
          action="https://monitorsonora.us19.list-manage.com/subscribe/post?u=531590cbcdb7f2d72e48cb5e0&amp;id=cd4dba1d73"
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true
            }
          ]}
          // Change predetermined language
          messages={{
            sending: "Enviando...",
            success:
              "Gracias por registrarte. La información es una gran aliada en estos tiempos de crisis. Juntos saldremos adelante.",
            error: "Ha ocurrido un error. Por favor intenta más tarde.",
            empty: "Ingresa tu correo electrónico",
            duplicate: "Este correo electrónico ya está registrado",
            button: "Regístrate"
          }}
          className="mailchimp-custom-form"
        />
      </div>
      <hr />
      <div className="width-80">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="monitorsonoramx"
          options={{ height: 500 }}
          noHeader
          noFooter
          theme="dark"
          transparent
        />
      </div>
      <hr />
      <a href="https://www.twitter.com/_juanmnl">&copy;{year} - juanmnl y </a>
      {"   "}
      <a href="https://twitter.com/monitorsonoramx">monitorsonoramx </a>

      <br />
      <br />
      <a href="https://github.com/alejandrogalaviz/covid19-monitor-sonora">
        ¿Nos ayudas?
      </a>
    </footer>
  );
}
