export default function TopConctactInformation() {
  const liStyle = "flex gap-2 items-center";
  return (
    <section>
      <ul className='flex justify-between items-center px-8 py-2 text-yellow-500 text-xs sm:px-40'>
        <li className={liStyle}>
          <svg
            version='1.2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 12 8'
            width='12'
            height='8'
          >
            <defs>
              <image
                width='12'
                height='8'
                id='img1'
                href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAMAAAD6Ou7DAAAAAXNSR0IB2cksfwAAAJBQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgHEPCYQAAADB0Uk5TPuj/8epBnWfs72iauzG6vbjyzEenqUbKpgCgoaL9iHfYVlPXeYX+lXt8k2CC+/heN2zqSgAAAF1JREFUeJwlzNkaQlAAReFtnQaRctAgGVJKit7/7XzxX62rJTmYCYulVmuXycbzxTbY/XsfhMgSxQkcjiesDJzTS5ZewSinKKtbfX80PMWrnQfvDn2+9HYYbE/zGwHBPgWZ3/pIFAAAAABJRU5ErkJggg=='
              />
            </defs>
            <style></style>
            <use href='#img1' x='0' y='0' />
          </svg>
          <p>youremail@gmail.com</p>
        </li>
        <li className={liStyle}>
          <svg
            version='1.2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 9 13'
            width='9'
            height='13'
          >
            <defs>
              <image
                width='9'
                height='13'
                id='img2'
                href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAMAAABM3rQ0AAAAAXNSR0IB2cksfwAAAHhQTFRF2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUg2qUgttI+VgAAACh0Uk5TKdHplOfULZ7/jqG1sHaPd6yzwFQAS727bme4TLZtjKigoyzV89PXMOrHD5QAAABUSURBVHicjYvXDYAwEMUehHKhXELvPcD+G1LEAFiy5B8Dli2EcFwPPpGUkihAGMXMrHSCNMsfihJV/VbT/q7v7Ur0elCjGqYEMxHx7YJ1Mxvv5jgv3AQIs2sXcYYAAAAASUVORK5CYII='
              />
            </defs>
            <style></style>
            <use href='#img2' x='0' y='0' />
          </svg>
          <p>(046) 123 - 456</p>
        </li>
      </ul>
    </section>
  );
}
