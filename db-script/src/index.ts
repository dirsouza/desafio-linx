import "reflect-metadata";
import { createConnection } from "typeorm";
import { Category, Image, Product } from "./entity";
import * as lineReader from "line-reader";
import { resolve } from "path";
import { formatCategory, formatImage, formatProduct } from "./utils";


createConnection().then(async connection => {
  console.log('Starting seed execution... Please wait!');

  const productRepository = connection.getRepository(Product);
  const categoryRepository = connection.getRepository(Category);
  const imageRepository = connection.getRepository(Image);

  const catalog = resolve(__dirname, "../catalog.json");
  try {
    lineReader.eachLine(catalog, { encoding: "utf8" }, async (line, last) => {
      const catalogo = JSON.parse(line);
      const product = await formatProduct(catalogo);
      const newProduct = await productRepository.findOne(product.id, {
        relations: ["categories", "images"]
      });

      if (!newProduct) {
        const prod = await productRepository.save(product);
        await categoryRepository.insert(await formatCategory(catalogo, prod));
        await imageRepository.insert(await formatImage(catalogo, prod));
      }

      if (last) {
        console.log('Execution of the finished seed!');
      }
    });
  } catch (e) {
    console.log(e);
  }

}).catch(error => console.log(error));
