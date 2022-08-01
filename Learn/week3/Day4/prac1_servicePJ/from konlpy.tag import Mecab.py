from konlpy.tag import Mecab

mec = Mecab(dicpath = r"C:\mecab\mecab-ko-dic")

mec.pos("abc")