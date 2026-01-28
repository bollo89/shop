import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Witamy w GamerShop',
  description: 'Oferujemy wysokiej jakości produkty w atrakcyjnych cenach',
  keywords: 'elektronika, sklep internetowy, zakupy online',
};

export default Meta;
