import { useState } from "react";
export default function Brands() {
  const dummyBrands = [
    {
      id: 1,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8DgscAgMYAfcVIl9AAfMVwqtebweIAeMMAesSKt9250+re6/UAdsLp8vny9/vw9vupyuaPu9/j7vc+k84Uhciyz+jV5fJ/sttcoNNtqdeZweJMmdDR4/HF2+43kM240ukAbsBho9QlisqUrRtSAAAFEUlEQVR4nO2bbbuqKhCGFbKFFVlWq+x1n/r//3GrlZDOkNUu6VzP/Zm3xxFmGCAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AvZzboewZvpa/3T9RjeyV7IMIznk67H8S6STIswR+hpxyNZS8GxOPWyfrp/ygi/sQwvqDtmHCmi72jAFd/ERPH4z1MKC6SM9aL/+6C+SU+FBqGcZiQVSl5hRCkc8u33ZXgPISO1Gj8g8Of8gxpUz2HGUUz0ySv8iYji0WsKyx51tmypb3RqDtllRk8UFkvGOmkjcFA34Bm15Wp7ozDv1dXOhd2CGkBZ+7+d9wpzM/bvCOxr9vOIPVPHJ4V5S1uXvtLH0zi+jV8KQ3lgW0qO9AwsBrBg/lAPFYbyxDRk+fgaQpvhDmVjUfVNYSjJH3XSizkDxofRtVSSKdHwjd4pDGOi84aPrxDW9mKqilJ13+ifwlDXJ9XsQA2yRM3HzVK3ZvRQYbi4bSLlDWiZyy51Y0YfFcb2b7ZkfbxQWRXH1CMBy4w+KhSRqb/ifbw03TYjAbNv9FGh6Z/38XkYW/UxlFSpqxm9VBhejOjw8WEVpCVbRZdSsjuFShcoFbECij3xn4g34KrqYMroC69xQBcK1SxIkiSYLIdHTYsQ22DCmSbv71TtJVlHEi2uZTpRaDb0yZpeSaING8MIvamqM5vFm0BupIgCn1OYLya0RHb6xoeqNrtZjE4j076gPsInFQY71h8Q2L68zxowrcpck46dKgxSzqUTPZlcBe0iijInk+ufcv/6ZxUGITflGuOqllB2HbJn6XjOxrMfVjhtbcT4InHKOcr4YAzIx7MfV5i0n4mlExhxLsI2IB/PdqAwOLVWWPgB1jbWMuvIWXWi8KHQjlth7L2wI2fVjcLVU8FrrVGzF+ZcRIcKBy8rtA/Zpup+c19nQ2vDO55TUVrXCrO2DpGGS2Z4pLB9UEMRm0DH7SK6U7hkQ48WCGXOV/mUR8cKjy/8pJYB77qIzhQuH9lc1LuuZmALF2HxWYWLF0woxOUfbeMiLD6qsEcOTbaULVRxbNHORdjNf07hhBGY8jufGnmkyh9rcLxboclHc4kWnQSb1sPmItUSQfoPmXID/icK5SotWGULbvKIXl51dnrNT5YN6eOO+hnENq0zGPAKxbFZ/NehMP/oJWSOqOSyRLYMUHik3NPZxFDIBppXSBRXa5fCu+iLkxu9ZMbzzQdaIUHsUNhE9l9RGJlZMnjeWUZheRDpo0IRWxO5dahZb8SZ1af4oMLo9l7s6pnZaJLCHioUorYe7/gMONeElZLyUKFu3uHj0tsMVkbDR4Vq0xD42L6hdhnDO4UyIwTmrFuaUdRvKfqmkL/2tXcGZ1X9RoDlmUL20lcBf+h9JQ/SGrX8Uhg77yYGe/bc+4x1uu+pQs3uaa5k7NH37em+nwql4i7BWgzZ02/rdN9PhZK2QINkS27nbR/vo0Ihdb/1e4Rf4k+N52x1DxQKqUT6yHuLhhmdb0rerXBNPUExT1eiKNaH1HGHmebmmlDDx9cUauerHcN5B0y+CiKIrjvgwbzHsc2Oq5/hiB+bg4lJVN17xDA7sCO45RxrTPkB3zC/u+6/yvT6dm19v+yXMi5O8/lnFv8LNrqlh/leRg8vUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAF/AU+jVohl2ANXQAAAABJRU5ErkJggg==",
    },
    {
      id: 19,
      img: "data:image/png;base64,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",
    },
    {
      id: 22,
      img: "data:image/png;base64,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",
    },
    {
      id: 33,
      img: "data:image/png;base64,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",
    },
    {
      id: 44,
      img: "data:image/png;base64,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",
    },
    {
      id: 55,
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAgVBMVEX///8DAAAAAADl5eVLSkrb2tp4eHjR0dHm5uZUVFQiISHf399DQkL09PRRUVG6urodHBzt7e2cnJzExMSDg4Ojo6OOjo7x8fEVFBSysrJlZWUvLy+qqqo6OTm+vr6KiorMzMxeXV1vb29ra2sSERFiYWGenp6BgIAtLCxAPz82NjYUl/M6AAAFEklEQVR4nO2abVPqMBCFSwBBEBAKKMiLiAj6/3/gRdKkyc1JmlRw5s49z4x+cLttutlkT7ZmGSGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEL+ccbNWLp1PP92yrKnCK8n4/ro8UXeLyU2IgHjTRetWKdX83H5Ps5pWT4oZYA+JvWCsxSNaMSd8mo+n58Y6STG+mGb91i38nVinxO826xWbNopj9bB6aeMuBzZId5NiMJnfoXY1A3OQ1JwNnVmU4/sJclL+jxdI3FqBidPGq+azW2a10B6taCX51biQTrtXfuv7TnPFc+2LcUjxmA20fWF5UN6LYDR69QQ7YsTWPXi2E0uVv061WqG3jLfKFbWwHXi7BwvIXazTZ5/9ND9Ci8Y0cm5/t2hqB2kk7vqdSJG89SvERnPgFeGfWIFp0iBDhiwev7atY2kBc7DwGuRFQ6sejFPfMfWYf68qBEbsHeIZ/OCoXGBToEvNwB6wM4yFV+FBc3DZcwDtEdsPbdLT5z96njs9NrJsUGVQBekb14FsIzAgJXDxLV1pOUIHnWSlsajw7t0QjmVmjgiW/c/821ycFAlWJsXnMzEGaqnuQFQWTtwbGInLV00D53KF7vCjiOyl944nyZ6Qf1nDXghwKhAcpyUg7O16gOHu4c3xH3VAKdXSJzss/PWnxzyVDeg/+wBGxMnVNTc5Gjow1PXNR2lxd3Dzzb3SGoDFEO5gKMZi1W+fEv1QvrPGnC5XYvy9OjWXb3esns3cYp0A9pYVGY6yrY6Ym6zSt+Okf57ywaKV30iLYvH+cAJnJqFDZT4kP5r9wHGjgKy7SwZut1m9y+a8leNsHlZQTUL1LE4GAXMPQKUJ3UnPUL6z3cK0HcDiiF4chhdMzjRBzpT+bwGygco8cWAxylH+Ln3dkE3q8r+lIROgNF4co8Hgb6LeMlqBOc9dfKkW6UsSCCpE6BLhLsUy/Lx4dV/SS+qFLWrGIJelbIgBaD/rAVtG9SZtpb+uwQOAl9z5LlduFVR82wJgfpvthkprIKtNx13KZb6zzkeWA3nSQ+Ael9q7wAndfHS7ni5Ymyg/huaF1jBKbYVsBQj9J+fPizwFxNQDA27UX87KvUfPDi4S7EMqCPYIrQsqNWqjTMEpqtuKwEeUX/NvMDMESVlUVOuWv/52fjbOK5isFfpLQH6z57oCUqcz4D+c5IgInFA91gpcdRQTD5X1wRVgpnvAqXK3KUYo/80A4PLH2D/T15bOXk3BOg/u/93FGBUoCmn2wduGS/UyhKV3Qn2KTu0Vc3bGwL7f2a/w9pc/C3giP4fVAyPFxPq1UgLnLzer4QG9//MMt6xFlXx+QjpP//nT6X/0BdDmQPok2kxQ3Dyfi5k+u0IYBlflPpqasVGfecGE31eVt+7R3Prxsb/7aCI6QYFIPQZb3rn4S22x3cKCeywaPdcoPdVT9Nh3UJ3DBSdb+t62UC3K44A8ON94HViM8cttj/EWDmeC+BbFgP2NR3wBKlanfYS8Rv1lYMjRNl6Tfn3CLUUQbEOeO2lE5CGIbdGbGyyddSyisfQKvN4r1Jqxy1ziTrd1x9iBcuWzfD7p5J7yG5r73SLXXnfBx+t4d3C/K602LdiGB51I3a0jvJQ/NZ5ixBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBDyX/MHj4JLgbKxpKwAAAAASUVORK5CYII=",
    },
    {
      id: 66,
      img: "data:image/png;base64,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",
    },
  ];

  const [brandData, setBrandData] = useState(dummyBrands);
  return (
    <section className=" bg-white mx-[1rem] md:mx-[2rem] mt-12 rounded-md p-4 mb-6 ">
      <div className="  grid  grid-cols-4 md:grid-cols-5 lg:grid-cols-7  gap-2  ">
        {brandData.map((data) => {
          return (
            <img
              src={data.img}
              key={data.id}
              className="w-[60px] sm:w-[80px] h-[60px] sm:h-[80px] object-contain mx-auto"
            />
          );
        })}
      </div>
    </section>
  );
}
