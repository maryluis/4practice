import { CardText, CardTitle, Card } from 'reactstrap';

function WelcomePage() {
  return (
    <Card className="welcomeCard p-5">
      <CardTitle tag="h4">Hello, user</CardTitle>
      <CardText className="welcomeText">
        Lorem ipsum — классический текст-«рыба» (условный,
        зачастую бессмысленный текст-заполнитель, вставляемый в м
        акет страницы). Является искажённым отрывком из философского трактата
        Марка Туллия Цицерона «О пределах добра и зла[en]», написанного в 45 году до н.
        э. на латинском языке, обнаружение сходства приписывается Ричарду МакКлинтоку[1].
        Распространился в 1970-х годах из-за трафаретов компании Letraset, a затем — из-за того,
        что служил примером текста в программе PageMaker. Испорченный текст, вероятно, происходит
        от его издания в Loeb Classical Library 1914 года, в котором слово dolorem разбито переносом
        так, что страница 36 начинается с lorem ipsum… (do- осталось на предыдущей)[2].

      </CardText>
    </Card>
  );
}
export default WelcomePage;
