export default function About() {
    return (
      <div>
        <h2>React Router Links</h2>
        <p>
          To permit our users to move freely between two routes we’ll have to
          include an anchor tag (<a/>
          ). However, the use of tags will inform that the browser to treat the
          route as if it’s an server-side route. Instead, we’ll have to make use
          of a different component using link in react router <link />. It needs
          prop “to” which indicates the client side route we wish to render.
        </p>
      </div>
    );
}
